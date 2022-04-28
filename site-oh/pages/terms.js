import ReactMarkdown from 'react-markdown';

TermsPage.getInitialProps = async (ctx) => {
    const options = { headers: new Headers({'Content-Type': 'application/json'}) }
    const res = await fetch('https://ensemble-tech.xyz/api/documents/?filters[type]=termsofuse&&filters[client]=oh', {
        method: 'GET', ...options
    })
    const data = await res.json()
    return {
        data: data.data[0].attributes.text
    }
}

export default function TermsPage({ data }) {

    return (
        <div className='m-auto p-5 max-w-4xl'>
            <h2 className="text-3xl text-gray-900 font-semibold">Terms of use</h2>
            <ReactMarkdown className="mt-6 text-ms leading-6 whitespace-pre-wrap">
                {data}
            </ReactMarkdown>
        </div>
    )
}
