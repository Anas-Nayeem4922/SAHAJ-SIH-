
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: "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",
    defaultHeaders: {
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'MyNextApp',
    },
});

export async function POST(request) {
    try {
        const body = await request.json();
        const userMessage = body.message;
        const history = body.history || [];  // Get chat history array

        const messages = [
            { role: 'system', content: 'Your name is Sahaj. You are a compassionate AI assistant that helps users with their mental health concerns. Respond in a concise and supportive manner, keeping answers under 100 words unless the user explicitly asks for a longer response. Always be empathetic, encouraging, and respectful while providing guidance' },
            ...history
            , { role: 'user', content: userMessage }
        ];

        const completion = await openai.chat.completions.create({
            model: 'deepseek/deepseek-chat-v3.1:free',
            messages: messages,

        });

        return NextResponse.json({
            result: completion.choices[0].message.content,
        });
    } catch (error) {
        console.error('AI API Error:', error);
        return NextResponse.json(
            { error: 'Something went wrong.' },
            { status: 500 }
        );
    }
}
