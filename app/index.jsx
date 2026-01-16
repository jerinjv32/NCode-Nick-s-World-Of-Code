import { useRouter } from 'expo-router'
import { UseAuthStore } from '../src/authStore'
import Loading from '../src/components/loading'

const Index = () => {
  const isLogged = UseAuthStore(state => state.loggedIn)
  const hasRehydrated = UseAuthStore(state => state._hasHydrated)
  const router = useRouter();

  if (!hasRehydrated) {
    return <Loading />
  } 
  
  if (!isLogged) {
    return router.replace('/signIn')
  }
}

export default Index
