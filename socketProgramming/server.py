import socket
import threading

def connectingClient(conn,addr):
    print("New Client Connnected")
    data=conn.recv(2048)

    print("Data recieved from client:",data)
    conn.sendall(b'Server has recieved your data thanks')

print("Starting server...")

HOST="localhost"
PORT=3001

server_socket=socket.socket()


server_socket.bind((HOST,PORT))



server_socket.listen()


print("Server is listening on:",HOST,PORT)


while True:
    conn,addr=server_socket.accept()

    t=threading.Thread(target=connectingClient,args=(conn,addr))
    t.start()