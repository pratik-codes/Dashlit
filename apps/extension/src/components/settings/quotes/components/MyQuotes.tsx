import React from 'react'
import QuotesComponents from './QuotesComponents'
import { Skeleton } from "@/components/ui/skeleton"

interface Props {
     MyQuotesRedux: any
}

const MyQuotes: React.FC<Props> = ({ MyQuotesRedux }) => {
     const isLoading = !MyQuotesRedux.data;

     return (
          <div className="w-full">
               {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pb-6">
                         {[...Array(4)].map((_, index) => (
                              <Skeleton
                                   key={index}
                                   className="w-full h-32 rounded-lg dark:bg-gray-800"
                              />
                         ))}
                    </div>
               ) : MyQuotesRedux.data.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pb-6">
                         {MyQuotesRedux.data.map((quote: any, index: number) => (
                              <div key={index} className="w-full">
                                   <QuotesComponents
                                        id={quote.id}
                                        quotes={quote.data.quote}
                                        author={quote.data.author}
                                        favourite={quote.data.favourite}
                                        type="my_quotes"
                                        getFavourites={undefined}
                                   />
                              </div>
                         ))}
                    </div>
               ) : (
                    <div className="flex flex-col items-center justify-center h-40 text-center">
                         <p className="text-xl font-medium dark:text-gray-300">
                              No quotes found
                         </p>
                         <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              Add your first quote now...
                         </p>
                    </div>
               )}
          </div>
     )
}

export default MyQuotes
