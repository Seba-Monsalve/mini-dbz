
export interface Character {
  id: string,
  name: string,
  ki: number
  maxKi: number,
  race: [key: string],
  gender: string
  description: string
  image: string
  affiliation: [key: string]
}