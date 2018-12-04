package com.kata.learn;

import java.util.ArrayList;
import java.util.List;

public class PrimeFactorClass implements PrimeFactorInterface{

	List<Integer> factorlist=new ArrayList<Integer>();
	int factor=2;
	
	@Override
	public List<Integer> findPrimeFactor(int number) {
		// TODO Auto-generated method stub
		if(number==1)
			return null;
		while(number/2>=factor)
		{
			if(number%factor==0)
			{
				factorlist.add(factor);
				number/=factor;
			}
			else
				factor++;
		}
		if(number>1)
			factorlist.add(number);
		return factorlist;
	}

}
