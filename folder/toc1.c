#include<stdio.h>
#include<string.h>
#define NO_OF_CHARS 256
 
int getNextState(char *pt, int m, int state, int k)
{
  
  if (state < m && k == pt[state])
  return state+1;
 
  int ns, i; 
  

  for (ns = state; ns > 0; ns--)
  {
  if(pt[ns-1] == k)
  {
  for(i = 0; i < ns-1; i++)
  {
  if (pt[i] != pt[state-ns+1+i])
  break;
  }
  if (i == ns-1)
  return ns;
  }
  }
 
  return 0;
}
 
/* Part a */
void computeTransitionTable(char *pt, int m, int TT[][NO_OF_CHARS])
{
  int state, k;
  for (state = 0; state <= m; ++state)
  for (k = 0; k < NO_OF_CHARS; ++k)
  TT[state][k] = getNextState(pt, m, state, k);
}
 
/* Prints all occurrences of pat in txt */
void search(char *pt, char *txt)
{
  int m = strlen(pt);
  int N = strlen(txt);
 
  int TT[m+1][NO_OF_CHARS];
 
  computeTransitionTable(pt, m, TT);
 
  int i, state=0;
  for (i = 0; i < N; i++)
  {
  state = TT[state][txt[i]];
  if (state == m)
  {
  printf ("\n Pattern found at index %d", i-m+1);
  }
  }
}
 
// Part b
int main()
{
  char *txt = "AABABBAACCCAABAAABAA";
  char *pt = "AAB";
  search(pt, txt);
  return 0;
}

