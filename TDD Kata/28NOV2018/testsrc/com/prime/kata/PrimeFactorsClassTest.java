package com.prime.kata;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFactorsClassTest {

	PrimeFactorsClass primefactorobj;
	@BeforeEach
	void setUp() throws Exception {
		primefactorobj=new PrimeFactorsClass();
	}
	
	List<Integer> convertToObject(int...number)
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
		assertEquals(convertToObject(2),primefactorobj.findPrimeFactors(2));
	}
	
	@Test
	void testFindPrimeFactors03() {
		assertEquals(convertToObject(3),primefactorobj.findPrimeFactors(3));
	}
	
	@Test
	void testFindPrimeFactors04() {
		assertEquals(convertToObject(2,2),primefactorobj.findPrimeFactors(4));
	}
	
	@Test
	void testFindPrimeFactors05() {
		assertEquals(convertToObject(2,2,2),primefactorobj.findPrimeFactors(8));
	}
	
	@Test
	void testFindPrimeFactors06() {
		assertEquals(convertToObject(3,3),primefactorobj.findPrimeFactors(9));
	}
	
	@Test
	void testFindPrimeFactors07() {
		assertEquals(convertToObject(3,3,3,47),primefactorobj.findPrimeFactors(1269));
	}

}
