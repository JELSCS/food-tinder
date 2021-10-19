package org.example;

import static org.junit.Assert.assertTrue;
import org.junit.*;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue()
    {
        assertTrue( true );
    }

    @Test
    public void testSquared(){
        App app=new App();
        int res= app.squared(4);
        Assert.assertEquals(16,res);
    }
}
