import ReactMarkdown from 'react-markdown';

PrivacyPage.getInitialProps = async (ctx) => {
    const options = { headers: new Headers({'Content-Type': 'application/json'}) }
    const res = await fetch('http://ensemble-tech.xyz/api/documents/?filters[type]=privacy&&filters[client]=oh', {
        method: 'GET', ...options
    })
    const data = await res.json()
    return {
        data: data.data[0].attributes.text
    }
}

export default function PrivacyPage({ data }) {

    return (
        <div className="m-auto p-5 max-w-4xl">
            <h2 className="text-3xl text-gray-900 font-semibold">Privacy Policy</h2>
            <ReactMarkdown className="mt-6 text-ms leading-6 whitespace-pre-wrap">
                {data}
            </ReactMarkdown>
        </div>
    )
}

