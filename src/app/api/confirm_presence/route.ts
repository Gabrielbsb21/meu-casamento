import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // depurar entrada
    // console.log(body);
    const { name, guestName, message } = body;
    // console.log(name);
    // console.log(guestName);
    // console.log(message);
    await sql`
      INSERT INTO wedding_guests (name, guest_name, message)
      VALUES (${name}, ${guestName}, ${message})`;
    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso' },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
  }
}
