import Link from 'next/link'

type Props = {
    result: Result
}

export default function Item({ result }: Props) {
    const itemTextCol = (
        <div className="flex flex-col justify-center">
            <h2>
                <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank"
                    className="text-xl font-bold underline text-blue-900 ">
                    {result.title}
                </Link>
            </h2>
            <p>{result.extract}</p>
        </div>
    )

    const content = result?.thumbnail?.source
        ? (
            <article className="m-4 max-w-lg">
                <div className="flex flex-row gap-4 ">
                    <div className="flex flex-col ustify-center">
                        <img
                            src={result.thumbnail.source}
                            alt={result.title}
                            width={result.thumbnail.width}
                            height={result.thumbnail.height}
                            loading="lazy"
                        />
                    </div>
                    {itemTextCol}
                </div>
            </article>

        )
        : (
            <article className="m-4 max-w-lg bg-lime-600 text-white p-2 rounded-sm">
                {itemTextCol}
            </article>
        )

    return content
}