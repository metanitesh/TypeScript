function flipCoin(): 'success' | 'error' {
  if (Math.random() > 0.5) {
    return 'success'
  }
  return 'error'
}

const value = flipCoin()

function maybeGetTheUser(): ['error', Error] | ['success', { name: string; email: string }] {
  if (flipCoin() === 'success') {
    return ['success', {
      name: 'Nitesh',
      email: 'nitesh@gmail.com'
    }]
  }
  return ['error', new Error('Coin failed')]
}

export const outcome = maybeGetTheUser()

// if (second instanceof Error) {
//   console.log(second)
// } else {
//   console.log(second.email)
// }

if (outcome[0] === 'success') {
  console.log(outcome)
}