import socket

print("Starting client : CLIENT2")

HOST="localhost"
PORT=3001

client_socket=socket.socket()

client_socket.connect((HOST,PORT))

client_socket.sendall(b"client2 is saying HI")

res=client_socket.recv(2048)

print("server response:",res)