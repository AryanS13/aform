import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server";

const BASE_URL = 'http://127.0.0.1:8000'


export async function getFormList(url: string, token: string) {
  // Do whatever you want

    // url = BASE_URL + '/' + 'api/' + 'forms?page=1'

    const config = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'authToken': token
        }
    }

    // try {
    //     const response = await fetch(url, config);

    //     if(response.ok) {
    //         const resp = await response.json()

    //         console.log(resp)
    //         return NextResponse.json(resp, { status: 200 });
    //     } else {

    //         return NextResponse.json({ message: "Failed to get forms", error: 'Error!!' }, { status: response.status });
    //     }
    // } catch(error) {
    //     console.log(error);
    //     return NextResponse.json({ message: "An error occurred", error: 'Failed' }, { status: 500 });
    // }

    fetch(url, config)
}