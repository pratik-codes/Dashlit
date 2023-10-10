import { deleteUserLinksService } from 'firebase/functions/LinksActions'
import { getLinksList } from 'redux/Actions/User.actions'

export const LinkClickHandler = (type: string, url: any) => {
  if (type === 'link') window.open(`https://${url[0].link}`, '_blank')
  else
    for (let i = 0; i < url.length; i++) {
      window.open(`https://${url[i].link}`, '_blank')
    }
}

export const linkDeleteHandler = async (id: string, dispatch: any) => {
  deleteUserLinksService(id)
  // deleteAnimation(true)

  setTimeout(async () => {
    await dispatch(getLinksList())
  }, 300)
}
