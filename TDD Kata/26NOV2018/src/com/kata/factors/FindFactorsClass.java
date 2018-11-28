package com.kata.factors;

import java.util.ArrayList;
import java.util.List;

public class FindFactorsClass implements FindFactorsInterface {
	List<Integer> numberlist = new ArrayList<Integer>();

	@Override
	public List<Integer> findFactors(int number) {

		int fact = 2;
		if (number == 1)
			return null;
		else {
			while (number/2>=fact) {
				if (number % fact == 0) {
					numberlist.add(fact);
					number /= fact;
				} else {
					fact++;
				}
			}
			if (number > 1)
				numberlist.add(number);
			return numberlist;
		}
	}

}
