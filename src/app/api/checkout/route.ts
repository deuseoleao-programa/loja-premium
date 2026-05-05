import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://loja-premium-8ihm14jg6-deuseoleao-2239s-projects.vercel.app'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const { cart } = await request.json()

    if (!cart || cart.length === 0) {
      return NextResponse.json(
        { error: 'Carrinho vazio' },
        { status: 400 }
      )
    }

    const total = cart.reduce(
      (acc: number, item: any) =>
        acc + Number(item.price) * Number(item.quantity),
      0
    )

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',

      line_items: cart.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: [item.image],
          },
          unit_amount: Math.round(Number(item.price) * 100),
        },
        quantity: item.quantity,
      })),

      success_url: `${SITE_URL}/success`,
      cancel_url: `${SITE_URL}/cart`,
    })

    const { error } = await supabase.from('orders').insert([
      {
        customer_email: 'teste@email.com',
        customer_name: 'Cliente Teste',
        total,
        status: 'pending',
        stripe_session_id: session.id,
        products: cart,
      },
    ])

    if (error) {
      console.log('ERRO AO INSERIR:', error)

      return NextResponse.json(
        { error: 'Erro ao salvar pedido' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      url: session.url,
    })
  } catch (err) {
    console.log('ERRO GERAL:', err)

    return NextResponse.json(
      { error: 'Erro ao criar checkout' },
      { status: 500 }
    )
  }
}