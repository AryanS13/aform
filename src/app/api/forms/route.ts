import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server";

const BASE_URL = 'http://127.0.0.1:8000'

export async function GET(request: NextApiRequest) {
    // Do whatever you want
    const url = BASE_URL + '/' + 'api/' + 'forms?page=1'


    const config = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `${request.headers.get('Authorization')}`,
        // 'cache': 'no-cache',
        }
    }

    console.log(config)

    try {
        console.log('Trying second request')
        const response = await fetch(url, config);

        if(response.ok) {
            const resp = await response.json()
            return NextResponse.json(resp, { status: 200 });
        } else {
            return NextResponse.json({ message: "Failed to get forms", error: 'Error!!' }, { status: response.status });
        }
    } catch(error) {
        console.log(error);
        return NextResponse.json({ message: "An error occurred", error: 'Failed' }, { status: 500 });
    }
}