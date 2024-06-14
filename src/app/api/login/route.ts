import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server";

const BASE_URL = 'http://127.0.0.1:8000'

export async function GET(request: NextApiRequest) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request: Request) {
  const url = `${BASE_URL}/api-token-auth/`;

  console.log('Aryan')
  // console.log(await request.formData())

  // let formData = await request.formData();
  const data = await request.json();

  console.log(data)
  
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }

  try {
    const response = await fetch(url, config);

    if (response.ok) {
      console.log()
      const resp = await response.json()

      return NextResponse.json(resp, { status: 200 });
    } else {
      console.log(response.body)

      return NextResponse.json({ message: "Failed to authenticate", error: data }, { status: response.status });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred", error: 'Failed' }, { status: 500 });
  }
}