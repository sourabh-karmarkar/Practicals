def divide(dividend, divisor):
    if not divisor:
        return None, None
    quotient = dividend // divisor
    remainder = dividend % divisor
    return quotient, remainder

# you can do this
q, r = divide(35, 0)