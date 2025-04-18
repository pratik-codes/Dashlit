import React from 'react'
import QuotesTabs from './components/QuotesTabs'
import { Card } from "@/components/ui/card"

const Quotes = () => {
     return (
          <Card className="w-full h-full rounded-lg border dark:border-gray-800 bg-white dark:bg-gray-950">
               <QuotesTabs />
          </Card>
     )
}

export default Quotes
