package com.prime.kata;

import java.util.ArrayList;
import java.util.List;

public class PrimeFactorsClass implements PrimeFactorInterface{

	List<Integer> primefactorlist;
	@Override
	public List<Integer> findPrimeFactors(int number) {
		int factor=2;
		primefactorlist=new ArrayList<Integer>();
		if(number==1)
			return null;
		while(number/2>=factor)
		{
			if(number%factor==0)
			{
				primefactorlist.add(factor);
				number=number/factor;
			}
			else
				factor++;
		}
		if(number>1)
			primefactorlist.add(number);
		return primefactorlist;
	}
	
}
