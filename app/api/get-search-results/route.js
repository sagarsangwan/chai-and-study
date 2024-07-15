"use server"

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"
// import { useSearchParams } from "next/navigation";
export async function GET(request) {
    const query = request.nextUrl.searchParams.get('query');
    try {
        const searchResults = await prisma.QuestionPaper.findMany({
            where: {
                OR: [
                    {
                        name: {
                            search: query
                        }
                    },
                    {
                        description: {
                            search: query
                        }
                    },

                ]
            }
        })
        console.log(searchResults)
        if (searchResults.length < 1) {
            return NextResponse.json({ searchResults: [], message: "No results found", status: 404 })
        }
        return NextResponse.json({ searchResults, status: 200, message: "Success" })
    } catch (error) {
        console.error('Error fetching search results:', error);
        return NextResponse.json({ searchResults: [], message: "Error fetching search results", status: 500 })
    }
}