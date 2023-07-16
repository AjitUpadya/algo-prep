def fib(n):
  fibA = [0, 1]
  while n > len(fibA):
    fibA.append(fibA[-1] + fibA[-2])
  return fibA

print(fib(20))