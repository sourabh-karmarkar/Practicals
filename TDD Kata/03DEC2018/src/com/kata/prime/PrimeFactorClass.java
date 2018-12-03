package com.kata.prime;

import java.util.ArrayList;
import java.util.List;

public class PrimeFactorClass implements PrimeFactorInterface{

	List<Integer> primeFactorList=new ArrayList<Integer>();
	@Override
	public List<Integer> findPrimeFactor(int number) {
		
		int factor=2;
		if(number==1)
			return null;
		while(number/2>=factor)
		{
			if(number%factor==0)
			{
				primeFactorList.add(factor);
				number=number/factor;
			}
			else
				factor++;
		}
		if(number>1)
			primeFactorList.add(number);
		return primeFactorList;
	}

}
