# Gas Station  -- Lang used  -- PYTHON

def ComCircuit(gas, cost):
    total_tank = 0
    current_tank = 0
    starting_station = 0
    
    for i in range(len(gas)):
        total_tank += gas[i] - cost[i]
        current_tank += gas[i] - cost[i]
        
        # If one couldn't get here
        if current_tank < 0:
            # Pick up the next station as the starting one
            starting_station = i + 1
        
            current_tank = 0   # Start with an empty tank
    
    return starting_station if total_tank >= 0 else -1

# Input of gas and cost.

gas = [1, 2, 3, 4, 5]
cost = [3, 4, 5, 1, 2]
print(ComCircuit(gas, cost))  # --Output: 3
