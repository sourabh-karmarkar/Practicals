dict_1={}
if __name__ == '__main__':
    for _ in range(int(input())):
        name = input()
        score = float(input())
        dict_1[name] = score

    # get list of names and scores and store in dictionary
    score_list = list(dict_1.values())

    # get the lowest score 
    min_val = min(score_list)

    # get the second lowest score
    second_lowest_score=min(list(filter(lambda a: a != min_val,score_list)))

    # set for fetching the names of students having second lowest score
    set_1=set()

    # add to set if score matches second_lowest_score
    for key in dict_1:
        if dict_1[key]==second_lowest_score:
            set_1.add(key)

    for x in sorted(set_1):
        print(x)