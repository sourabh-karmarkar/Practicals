package com.kata.learn;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PrimeFactorClassTest {

	PrimeFactorClass primeobj;
	List<Integer> numberlist;
	@BeforeEach
	void setUp() throws Exception {
		primeobj=new PrimeFactorClass();
	}

	List<Integer> convertToObj(int...number)
	{
		numberlist=new ArrayList<Integer>();
		for(int num:number)
			numberlist.add(num);
		return numberlist;
	}
	
	@Test
	void testFindPrimeFactor01() {
		assertEquals(null,primeobj.findPrimeFactor(1));
	}
	
	@Test
	void testFindPrimeFactor02() {
		assertEquals(convertToObj(2),primeobj.findPrimeFactor(2));
	}
	
	@Test
	void testFindPrimeFactor03() {
		assertEquals(convertToObj(3),primeobj.findPrimeFactor(3));
	}
	
	@Test
	void testFindPrimeFactor04() {
		assertEquals(convertToObj(2,2),primeobj.findPrimeFactor(4));
	}

	@Test
	void testFindPrimeFactor05() {
		assertEquals(convertToObj(2,2,2),primeobj.findPrimeFactor(8));
	}
	
	@Test
	void testFindPrimeFactor06() {
		assertEquals(convertToObj(3,3),primeobj.findPrimeFactor(9));
	}
	
	@Test
	void testFindPrimeFactor07() {
		assertEquals(convertToObj(3,3,3,47),primeobj.findPrimeFactor(1269));
	}
}
