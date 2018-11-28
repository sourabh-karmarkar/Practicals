package com.kata.prime;

import java.util.ArrayList;
import java.util.List;

public class PrimeFactorClass implements PrimeFactorInterface {
	List<Integer> primefactorlist;

	@Override
	public List<Integer> findPrimeFactors(int number) {
		primefactorlist = new ArrayList<Integer>();
		int factor = 2;
		if (number == 1)
			return null;
		else {
			while (number / 2 >= factor) {
				if (number % factor == 0) {
					primefactorlist.add(factor);
					number /= factor;
				} else
					factor++;
			}
			if (number > 1)
				primefactorlist.add(number);
			return primefactorlist;
		}
	}
}
