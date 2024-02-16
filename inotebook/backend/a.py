from multiprocessing import Process, current_process
data = [1, 2]
def fun():
    global data
    data.extend((3, 4, 5))
    print(f'Result in {current_process().name}: {data}')
def main():
    worker = Process(target=fun)
    worker.start()
    worker.join()
    print(f'Result in main: {data}')
    if __name__ == '__main__':
        main()from multiprocessing import Process, current_process
        data = [1, 2]
def fun():
    global data
    data.extend((3, 4, 5))
    print(f'Result in {current_process().name}: {data}')
    def main():
    worker = Process(target=fun)
    worker.start()
    worker.join()
    print(f'Result in main: {data}')
    if __name__ == '__main__':
    main()