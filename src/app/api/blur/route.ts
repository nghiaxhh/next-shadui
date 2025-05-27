import { getPlaiceholder } from 'plaiceholder'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { url } = await request.json()
    const response = await fetch(url)
    const buffer = Buffer.from(await response.arrayBuffer())
    const { base64 } = await getPlaiceholder(buffer)
    return NextResponse.json({ blurDataURL: base64 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Failed to generate blur data' }, { status: 500 })
  }
}
