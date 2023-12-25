import getWikiResults from '@/lib/getWikiResult'
import Item from './components/Item'
type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const data: Promise<SearchResult> = getWikiResults(searchTerm)
    const final_result = await data
    const display = searchTerm.replaceAll('%20', ' ')
    if(!final_result?.query?.pages) {
        return {
            title: `${display} Not Found`
        }
    }
    if(final_result?.query?.pages) {
        return {
            title: display,
            description: `result for ${searchTerm}`
        }
    }
}

const searchTerm = async ({ params: { searchTerm } }: Props ) => {
    const data: Promise<SearchResult> = getWikiResults(searchTerm)
    const final_result = await data
    const result: Result[] | undefined = final_result?.query?.pages
    const display = searchTerm.replaceAll('%20', ' ')
    const res = (
        <main>
            {
                result ? Object.values(result).map(re => {
                    return <Item key={re.pageid} result={re}/>
                }) : <h2>{`${display} Not Found`}</h2>
            }
        </main>
    )
    return res
}

export default searchTerm
