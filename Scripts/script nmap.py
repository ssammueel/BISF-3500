import nmap

begin = 1
end = 100

target = '192.168.100.17'

scanner = nmap.PortScanner()

for i in range(begin,end+1):
    res = scanner.scan(target, str(i), arguments='-T4')
    res= res['scan'][target]['tcp'][i]['state']
    if res == 'open':
        print(f"port {i} is {res}.")


# import nmap

# pt = 22

# target = '127.0.0.1'

# scanner = nmap.PortScanner()

# res = scanner.scan(target, str(pt))

# # print(res)
# state = res['scan'][target]['tcp'][pt]['state']

# print(f"port {pt} is {state}")