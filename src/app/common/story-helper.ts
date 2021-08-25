
import { StoryService } from "src/app/services/story.service"

export const getStoryPostDate = (postTimeEpox:number, currentTimeEpox:number):string => {
    const minutes = (currentTimeEpox - postTimeEpox) /  (60 * 1000)
    if (minutes < 60) 
      return `${Math.floor(minutes)} ${minutes < 2 ? 'minute' : 'minutes'} ago`
    const hours = minutes / 60
    if (hours < 24) 
      return `${Math.floor(hours)} ${hours < 2 ? 'hour' : 'hours'} ago`
    const days = hours / 24
    if (days < 100) 
      return `${Math.floor(days)} ${days < 2 ? 'day' : 'days'} ago`
    const months = days / 30
    if (months < 12) 
      return `${Math.floor(months)} ${months < 2 ? 'month' : 'months'} ago`
    const date = new Date(postTimeEpox * 1000)
    return date.toDateString()
  }