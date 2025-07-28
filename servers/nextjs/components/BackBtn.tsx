'use client';
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const BackBtn = () => {
    const router = useRouter();
    return (
        <Button 
            onClick={() => router.back()} 
            variant="ghost" 
            size="icon"
            className="rounded-full border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all duration-200"
        >
            <ArrowLeft className="h-5 w-5 text-white" />
            <span className="sr-only">Zurück</span>
        </Button>
    )
}

export default BackBtn
