package com.kata.prime;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFactorClassTest {

	PrimeFactorClass primefactorobj;
	@BeforeEach
	void setUp() throws Exception {
		primefactorobj=new PrimeFactorClass();
	}

	List<Integer> convertToObj(int...number)
	{
		List<Integer> numberlist=new ArrayList<Integer>();
		for(int num:number)
			numberlist.add(num);
		return numberlist;
	}
	
	@Test
	void testFindPrimeFactors01() {
		assertEquals(null,primefactorobj.findPrimeFactors(1));
	}
	
	@Test
	void testFindPrimeFactors02() {
		assertEquals(convertToObj(2),primefactorobj.findPrimeFactors(2));
	}

	@Test
	void testFindPrimeFactors03() {
		assertEquals(convertToObj(3),primefactorobj.findPrimeFactors(3));
	}
	
	@Test
	void testFindPrimeFactors04() {
		assertEquals(convertToObj(2,2),primefactorobj.findPrimeFactors(4));
	}
	
	@Test
	void testFindPrimeFactors05() {
		assertEquals(convertToObj(2,2,2),primefactorobj.findPrimeFactors(8));
	}
	
	@Test
	void testFindPrimeFactors06() {
		assertEquals(convertToObj(3,3),primefactorobj.findPrimeFactors(9));
	}
	
	@Test
	void testFindPrimeFactors07() {
		assertEquals(convertToObj(3,3,3,47),primefactorobj.findPrimeFactors(1269));
	}

}
