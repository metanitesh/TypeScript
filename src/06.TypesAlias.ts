type successOutcome = ['success', {
  name: 'Nitesh',
  value: 'Sharma'
}]

type errorOutcome = ['error', {
  error: Error
}]

type outcome = successOutcome | errorOutcome