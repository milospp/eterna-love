import string
import hashlib


def ordinal_to_alphanum(ordinal):
    """
    Converts an ordinal number into a nonlinear, non-overlapping uppercase alphanumeric sequence.
    Uses hashing for a randomized and obfuscated output.
    """
    # Define the Base36 character set (digits 0-9 and uppercase letters A-Z)
    charset = string.digits + string.ascii_uppercase  # '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    charset = '1234567890ABCDEFGHIJKLMNPRSTUVWXYZ'  # '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    # Base36 encoding function
    def encode_base36(number):
        if number == 0:
            return charset[0]
        encoded = []
        base = len(charset)
        while number > 0:
            encoded.append(charset[number % base])
            number //= base
        return ''.join(reversed(encoded))

    # Step 1: Create a random, nonlinear transformation of the ordinal number
    # We hash the ordinal number to introduce randomness and avoid a simple sequence
    hash_input = str(ordinal).encode('utf-8')
    hash_value = hashlib.sha256(hash_input).hexdigest()  # Get a SHA256 hash

    # Step 2: Take a part of the hash value and convert it to an integer
    # We can take the first few characters of the hash and convert them into a number
    hash_part = int(hash_value[:7], 16)  # Convert first 8 characters of the hash to an integer

    # Step 3: Apply Base36 encoding to the hashed value to ensure a compact alphanumeric output
    return encode_base36(hash_part)


print(ordinal_to_alphanum(100))

all_elements = []
for i in range(20000):
    order_id = ordinal_to_alphanum(i)
    if order_id not in all_elements:
        all_elements.append(order_id)
    else:
        print("PROBLEM", i, order_id)



print(ordinal_to_alphanum(10))