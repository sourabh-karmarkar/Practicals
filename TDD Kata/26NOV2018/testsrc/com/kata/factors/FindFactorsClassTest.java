package com.kata.factors;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FindFactorsClassTest {

	FindFactorsClass findfact;
	@BeforeEach
	void setUp() throws Exception {
		findfact=new FindFactorsClass();
	}
	
	List<Integer> convertToObject(int...number)
	{
		List<Integer> numberlist=new ArrayList<Integer>();
		for(int num:number)
			numberlist.add(num);
		return numberlist;
	}

	@Test
	void testFindFactors01() {
		assertEquals(null, findfact.findFactors(1));
	}

	@Test
	void testFindFactors02() {
		assertEquals(convertToObject(2), findfact.findFactors(2));
	}
	
	@Test
	void testFindFactors03() {
		assertEquals(convertToObject(3), findfact.findFactors(3));
	}
	
	@Test
	void testFindFactors04() {
		assertEquals(convertToObject(2,2), findfact.findFactors(4));
	}
	
	@Test
	void testFindFactors05() {
		assertEquals(convertToObject(2,2,2), findfact.findFactors(8));
	}
	
	@Test
	void testFindFactors06() {
		assertEquals(convertToObject(3,3), findfact.findFactors(9));
	}
	
	@Test
	void testFindFactors07() {
		assertEquals(convertToObject(3,3,3,47), findfact.findFactors(1269));
	}
}
