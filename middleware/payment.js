export default function({ route, redirect }) {
  if (route.path === '/') {
    const now = new Date()
    redirect(`/payment/${now.getMonth() + 1}`)
  }
}
