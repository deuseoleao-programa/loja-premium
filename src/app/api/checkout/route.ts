import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const { cart } = await request.json()

    console.log('CART RECEBIDO:', cart)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',

      line_items: cart.map((item: any) => ({
        price_data: {
          currency: 'brl',
          product_data: {
            name: item.title,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),

      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cart',
    })

    const total = cart.reduce(
      (acc: number, item: any) =>
        acc + item.price * item.quantity,
      0
    )

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
    } else {
      console.log('PEDIDO SALVO COM SUCESSO')
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