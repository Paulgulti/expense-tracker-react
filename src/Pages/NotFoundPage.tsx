import { Button } from '@/Components/ui/button'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-3'>
                <h2> 404 Not Found</h2>
                <Button asChild>
                    <Link to="/">Back to home</Link>
                </Button>
            </div>
        </div>
    )
}

export default NotFoundPage