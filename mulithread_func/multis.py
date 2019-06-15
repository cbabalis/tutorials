#!/usr/bin/env python
# -*- encoding: utf8 -*-


""" This example runs a python function many times in parallel. """

import concurrent.futures


def adder(x, y):
    return x + y


def run_kw(times, fn, args):
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=times) as executor:
        for ar in args:
            execution = {executor.submit(fn, *ar): ar}
            for future in concurrent.futures.as_completed(execution):
                result = execution[future]
                try:
                    data = future.result()
                    print data
                    results.append(data)
                except Exception as exc:
                    print('%r generated an exception: %s' % (result, exc))
    return results


def main():
    args = ([1, 3], [4, 10], [6, 10], [3, 2])
    results = run_kw(3, adder, args)
    print results


if __name__ == '__main__':
    main()
