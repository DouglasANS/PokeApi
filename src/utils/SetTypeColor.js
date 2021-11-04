export function SetTypeColor(type) {
    switch (type) {
      case 'normal':
        return '#A8A77A'
      case 'fire':
        return '#EF8F49'
      case 'water':
        return '#70BAFF'
      case 'electric':
        return '#DEE217'
      case 'grass':
        return '#65DA52'
      case 'ice':
        return '#4EEDE3'
      case 'fighting':
        return '#D74C47'
      case 'poison':
        return '#DA52BE'
      case 'ground':
        return '#E2BF65'
      case 'flying':
        return '#A98FF3'
      case 'psychic':
        return '#F95587'
      case 'rock':
        return '#B6A136'
      case 'bug':
        return '#A6B91A'
      case 'ghost':
        return '#735797'
      case 'dragon':
        return '#8F61FF'
      case 'dark':
        return '#705746'
      case 'steel':
        return '#B7B7CE'
      case 'fairy':
        return '#EE7AAB'
      default:
        return '#000000'
    }
  }