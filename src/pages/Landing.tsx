import { Link } from 'react-router-dom'
import { Button } from '../components/ui'

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <h1 className="text-4xl font-bold mb-4">Health Portal</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-lg">
        Welcome to the Health Portal. More information about the main features will be available here soon.
      </p>
      
      <div className="flex gap-4">
        <Button asChild variant="default">
          <Link to="/terms-and-services">View Terms and Services</Link>
        </Button>
      </div>
    </div>
  )
}
