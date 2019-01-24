from collections import Counter
import collections
new_dict={}

if __name__ == '__main__':
    s = input()

    if(3 < len(s) <= 10000):
        # get the occurence count of all the letters by using Counter
        counter = Counter(s)
        
        # sort the dicitonary according to the key
        sorted_d = sorted(counter.items())
        for key, value in sorted_d:
            new_dict[key]=value

        # convert the new dictionary to Counter object
        new_dict_counter=collections.Counter(new_dict)

        # get the most common used 3 elements from counter and store in a list
        mc_list=new_dict_counter.most_common(3)
        for x in mc_list:
            print(x[0],x[1])