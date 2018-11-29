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

	List<Integer> convertToObject(int...number)
	{
		List<Integer> numberlist=new ArrayList<Integer>();
		for(int num:number)
			numberlist.add(num);
		return numberlist;
	}
	
	@Test
	void testGetPrimeFactors01() {
		assertEquals(null,primefactorobj.getPrimeFactors(1));
	}
	
	@Test
	void testGetPrimeFactors02() {
		assertEquals(convertToObject(2),primefactorobj.getPrimeFactors(2));
	}
	
	@Test
	void testGetPrimeFactors03() {
		assertEquals(convertToObject(3),primefactorobj.getPrimeFactors(3));
	}
	
	@Test
	void testGetPrimeFactors04() {
		assertEquals(convertToObject(2,2),primefactorobj.getPrimeFactors(4));
	}
	
	@Test
	void testGetPrimeFactors05() {
		assertEquals(convertToObject(2,2,2),primefactorobj.getPrimeFactors(8));
	}

	@Test
	void testGetPrimeFactors06() {
		assertEquals(convertToObject(3,3),primefactorobj.getPrimeFactors(9));
	}
	
	@Test
	void testGetPrimeFactors07() {
		assertEquals(convertToObject(3,3,3,47),primefactorobj.getPrimeFactors(1269));
	}
}
