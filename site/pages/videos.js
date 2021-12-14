import { useTranslation } from 'react-i18next'
import styles from '../styles/Videos.module.css'

export async function getServerSideProps(ctx) {
    const reqUrl = `${process.env.NEXT_YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${process.env.NEXT_YOUTUBE_CHANNELID}&key=${process.env.NEXT_YOUTUBE_API_KEY}`
    const res = await fetch(reqUrl)
    const data = await res.json()
    return { 
        props: {
            data 
        }
    }
}

export default function VideosPage({ data }) {
    const { t, i18n } = useTranslation()

    return (
        <div className={styles.container}>
            <h2>{t('video')}</h2>
            <ul className={styles.grid}>  
            {data && data.items && data.items.map(({ id, snippet = {} }) => {
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { medium } = thumbnails;
                return (
                <li key={id} className={styles.card}>
                    <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                    <p>
                        <img width={medium.width} height={medium.height} src={medium.url} alt="" />
                    </p>
                    <h3>{ title }</h3>
                    </a>
                </li>
                )
            })}
            </ul>
        </div>
    )
}