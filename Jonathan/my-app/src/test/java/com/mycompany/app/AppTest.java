package com.mycompany.app;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    App app;

    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue()
    {
        assertTrue( true );
    }

    @Test
    @DisplayName("Simple addition")
    void testAddition() {
	assertEquals(8, app.add(3, 5),
		"Addition should work");
    }
}
