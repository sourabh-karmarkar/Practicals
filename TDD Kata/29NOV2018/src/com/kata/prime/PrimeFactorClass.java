package com.kata.prime;
import java.util.ArrayList;
import java.util.List;

public class PrimeFactorClass implements PrimefactorInterface{

	List<Integer> factorslist=new ArrayList<Integer>();
	int factor=2;
	@Override
	public List<Integer> getPrimeFactors(int number) {
		if(number==1)
			return null;
		while(number/2>=factor)
		{	
			if(number%factor==0)
			{
				factorslist.add(factor);
				number/=factor;
			}
			else
				factor++;
		}
		if(number>1)
			factorslist.add(number);
		return factorslist;
	}
	
}
