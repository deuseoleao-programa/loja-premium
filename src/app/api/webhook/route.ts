import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.log('Erro webhook:', err)

    return NextResponse.json(
      { error: 'Webhook error' },
      { status: 400 }
    )
  }

  if (event.type === 'checkout.session.completed') {
    const session =
      event.data.object as Stripe.Checkout.Session

    const { error } = await supabase
      .from('orders')
      .update({
        status: 'paid',
      })
      .eq('stripe_session_id', session.id)

    if (error) {
      console.log('Erro ao atualizar:', error)
    } else {
      console.log('Pedido atualizado para PAID')
    }
  }

  return NextResponse.json({
    received: true,
  })
}