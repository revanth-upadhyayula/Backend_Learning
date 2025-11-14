import socket


HOST="localhost"
PORT=3001


print("Starting a client : CLIENT1")

client_socket=socket.socket()

client_socket.connect((HOST,PORT))


client_socket.sendall(b"Hello from client1")

response=client_socket.recv(2048)

print("response:",response)