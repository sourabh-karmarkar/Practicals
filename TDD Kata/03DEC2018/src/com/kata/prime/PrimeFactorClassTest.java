package com.kata.prime;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFactorClassTest {

	PrimeFactorClass primeObj;
	@BeforeEach
	void setUp() throws Exception {
		primeObj=new PrimeFactorClass();
	}

	List<Integer> convertToObj(int...number)
	{
		List<Integer> numberList=new ArrayList<Integer>();
		for(int num:number)
			numberList.add(num);
		return numberList;
	}
	
	@Test
	void testFindPrimeFactor1() {
		assertEquals(null,primeObj.findPrimeFactor(1));
	}
	
	@Test
	void testFindPrimeFactor2() {
		assertEquals(convertToObj(2),primeObj.findPrimeFactor(2));
	}
	
	@Test
	void testFindPrimeFactor3() {
		assertEquals(convertToObj(3),primeObj.findPrimeFactor(3));
	}
	
	@Test
	void testFindPrimeFactor4() {
		assertEquals(convertToObj(2,2),primeObj.findPrimeFactor(4));
	}
	
	@Test
	void testFindPrimeFactor5() {
		assertEquals(convertToObj(2,2,2),primeObj.findPrimeFactor(8));
	}
	
	@Test
	void testFindPrimeFactor6() {
		assertEquals(convertToObj(3,3),primeObj.findPrimeFactor(9));
	}
	
	@Test
	void testFindPrimeFactor7() {
		assertEquals(convertToObj(3,3,3,47),primeObj.findPrimeFactor(1269));
	}
}
